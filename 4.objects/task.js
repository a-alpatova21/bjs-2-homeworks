function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
};

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function(...marks) {
  this.marks.push(...marks);
};

Student.prototype.getAverage = function() {
  return this.marks.reduce((sum, item) => sum + item) / this.marks.length;
};

Student.prototype.exclude = function(reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
};
