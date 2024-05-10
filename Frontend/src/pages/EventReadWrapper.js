import React from 'react';
import EventReadOnly from './EventReadOnly'; // Import the original class-based component

// Create a wrapper function that returns an instance of the class-based component
export function EventReadWrapper() {
  return <EventReadOnly />;
}
