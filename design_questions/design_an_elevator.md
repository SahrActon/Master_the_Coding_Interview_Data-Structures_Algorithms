# This is with the assumtion that we only have one elevator operating

# An elevator has a range of floors that it can go through - Start from 0 all the way to n

# we can automatically remove the 13th floor - This is an industry standard


When the elevator is at the bottom 
- call([call] )
- CurrentLocation()
- CalcualatePath()
- Status()
- DoorOpen()
- DoorClosed()
- TimerToCloseDoor()

# We have to think about the shortest path always
- We can use a single path algorithm


- Process 
  - user calls an elevator
  - checkElevatorCurrentLocation
    - Check number of calls before current
    - if currentLocation less than previousCalls
    - then stop at all middle calls