---
id: "capacitiveTouchBoxPuzzle"
title: "Capacitive Touch Box Puzzle"
---

This is one of my projects which encorporates an Arduino microprocessor with the wooden puzzle theme.

The box is opened by sliding the panel open but this is locked with a servo motor.

To unlock the servo motor, one must first twist the knob on the side of the box to release a ball bearing. This ball must then be navigated through a two layered maze.

When the ball reaches the end point of the maze, it will trigger a micro-switch which then completes the circuit to power the Arduino.

The user must then key in a code by touching the wooden panel where the numbers are located which will be recognised by the Arduino. If the code is correct, the Arduino will send a signal to unlock the servo motor.

The wooden touch screen panel was created by attaching small pieces of aluminium foil on the back side of the panel. This foil is connected to one of the I/O pins of the Arduino. This creates a capacitive sensor. When the user places a finger on the panel, opposite the foil, the capacitance sensor reads an increase in capacitance due to the finger. This is used to register the touches.
