'use client';

import { useEffect, useState } from 'react';

// Component 1: Native Share Sheet with Clipboard Fallback
export function NativeShareButton() {
    const handleShare = async () => {
        if (typeof window !== 'undefined' && navigator.share) {
            try {
                await navigator.share({
                    title: document.title,
                    text: 'Saving this for later:',
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Share canceled', err);
            }
        } else {
            // Fallback for desktop browsers
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy', err);
            }
        }
    };

    return (
        <button onClick={handleShare} className="bg-blue-600 text-white p-2 rounded">
            Share / Save Link
        </button>
    );
}

// Component 2: Email to Myself Link
export function EmailShareButton() {
    const [currentUrl, setCurrentUrl] = useState('');
    const [rawUrl, setRawUrl] = useState('');
    const [buttonText, setButtonText] = useState('Email to Myself');
    
    useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(encodeURIComponent(window.location.href));
      setRawUrl(window.location.href);
    }
  }, []);

  const handleEmailClick = async () => {
    // 1. Copy immediately inside the direct click event 
    try {
      await navigator.clipboard.writeText(rawUrl);
    } catch (err) {
      console.error('Clipboard copy failed', err);
    }

    const startTime = Date.now();
    const mailtoUrl = `mailto:?subject=Saved%20for%20Later&body=Here%20is%20the%20link%20you%20saved%3A%20${currentUrl}`;
    
    // 2. Fire the native app trigger
    window.location.href = mailtoUrl;
    
    // 3. Check if they have an email app after 2-second delay
    setTimeout(() => {
      // If focus didn't leave the tab within 2 seconds, no local email app opened
      if (Date.now() - startTime < 2500) {
        // Change the button text inline instead of an annoying alert box
        setButtonText('Link Copied to Clipboard!');
        
        // Reset text back to normal after 3 seconds
        setTimeout(() => {
          setButtonText('Email to Myself');
        }, 3000);
      }
    }, 2000); // 2-second delay
  };

  return (
    <button 
      onClick={handleEmailClick}
      className="bg-blue-600 text-white p-2 rounded"
    >
      {buttonText}
    </button>
  );
}