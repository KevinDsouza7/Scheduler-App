// Display current day
displayCurrentDay();

// Display time blocks and color-code
for each hour in businessHours {
    timeBlock = createTimeBlock(hour);
    colorCodeTimeBlock(timeBlock);
    display(timeBlock);
}

// Handle time block click
onTimeBlockClick(timeBlock, handleTimeBlockClick);

// Save event to local storage
saveToLocalStorage(timeBlock);

// Load events from local storage
savedEvents = loadFromLocalStorage();

// Initialize the planner
initializePlanner();

// Event listener for time block click
on(timeBlock, "click", handleTimeBlockClick);

// Event listener for page refresh
on(window, "load", initializePlanner);
