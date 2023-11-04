class CustomTimer {
  constructor() {
    this._initState();
  }

  start(callback, delay, isInterval = false) {
    if (
      typeof callback !== "function" ||
      typeof delay !== "number" ||
      delay <= 0
    ) {
      throw new Error("Invalid arguments provided to start method.");
    }
    this.stop(); // Clear any previous timer

    this._userCallback = callback;
    this._startTime = Date.now();
    this._endTime = this._startTime + delay;
    this._remaining = delay;

    if (isInterval) {
      this._interval = delay;
    }

    this._startTimer(delay);
  }

  pause() {
    if (!this._timerId || this._isPaused) return;

    this._isPaused = true;
    this._remaining -= Date.now() - this._startTime;

    this._clearTimer();
  }

  resume() {
    if (!this._isPaused) return;

    this._startTimer(this._remaining);

    this._isPaused = false;
    this._startTime = Date.now();
    this._endTime = this._startTime + this._remaining;
  }

  stop() {
    this._clearTimer();
    this._initState();
  }

  _initState() {
    this._startTime = null;
    this._endTime = null;
    this._remaining = null;
    this._interval = null;
    this._userCallback = null;
    this._timerId = null;
    this._isPaused = false;
  }

  _startTimer(delay) {
    // If it's an interval and it's paused, then on resume, we just use a setTimeout.
    if (this._interval && this._isPaused) {
      this._timerId = setTimeout(() => {
        this._tick();
        this._timerId = setInterval(this._tick, this._interval);
      }, delay);
    } else {
      const timerFn = this._interval ? setInterval : setTimeout;
      this._timerId = timerFn(this._tick, delay);
    }
  }

  _clearTimer() {
    if (this._timerId) {
      // clearInterval works for both interval and timeout
      clearInterval(this._timerId);
      this._timerId = null;
    }
  }

  // Using an arrow function here ensures 'this' retains the current instance's context
  // We could also use .bind(this) in the constructor
  // We need to do this because setInterval and setTimeout change the context of 'this'
  _tick = () => {
    if (this._isPaused) return;

    this._userCallback();

    if (this._interval) {
      this._remaining = this._interval;
      this._startTime = Date.now();
      this._endTime = this._startTime + this._remaining;
    } else {
      this.stop();
    }
  };

  get timerId() {
    return this._timerId;
  }

  get timeRemaining() {
    if (this._isPaused) return this._remaining;
    return Math.max(this._endTime - Date.now(), 0);
  }
}

// Example usage

const timer = new CustomTimer();

timer.start(
  () => {
    console.log("Hello!");
  },
  5000,
  true
); // Execute the callback every 5 seconds

setTimeout(() => {
  timer.pause();
  console.log("Timer paused");
}, 2000); // Pause the timer after 2 seconds

setTimeout(() => {
  timer.resume(); // Resume the timer after 4 seconds (2 seconds after it was paused)
}, 4000);

setInterval(() => {
  console.log(`Time remaining: ${timer.timeRemaining}ms.`); // Get the time remaining every second
}, 1000);
