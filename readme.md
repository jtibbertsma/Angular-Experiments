# Clock

A clock that counts up in mm:ss format starting at 0:00

## What I've Got So Far

I learned about factory and I set up a factory to construct a clock object that I wrote. This factory uses the angular $interval service to increment a count on the clock object.

## What I need to figure out

How do I update the DOM every second? The incrementing function is defined inside of a factory, so it can't know about the scope. Maybe I need to set up some sort of listener in the controller.

Maybe I'm going about this all wrong, and I should implementing this as sort of thing as a service.