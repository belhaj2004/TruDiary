import React from 'react';
import EventNew from './EventNew'; // Import the original class-based component

// Create a wrapper function that returns an instance of the class-based component
export function EventNewWrapper() {
  return <EventNew />;
}
