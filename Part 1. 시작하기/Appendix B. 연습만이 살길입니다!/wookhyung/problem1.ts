type StartTime = `${string}:${string}`;
type EndTime = `${string}:${string}`;

function scheduleMeeting(startTime: StartTime, endTime: EndTime, durationMinutes: number): boolean {
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);

  const start = startHour * 60 + startMinute;
  const end = endHour * 60 + endMinute;

  return end - start >= durationMinutes;
}

const dayEnd = '17:45';

console.log(scheduleMeeting('7:00', dayEnd, 15)); // false
console.log(scheduleMeeting('07:15', dayEnd, 30)); // false
console.log(scheduleMeeting('7:30', dayEnd, 30)); // false
console.log(scheduleMeeting('11:30', dayEnd, 60)); // true
console.log(scheduleMeeting('17:00', dayEnd, 45)); // true
console.log(scheduleMeeting('17:30', dayEnd, 30)); // false
console.log(scheduleMeeting('18:00', dayEnd, 15)); // false
