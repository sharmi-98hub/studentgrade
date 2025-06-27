function calculateGrade() {
      let s1 = parseFloat(document.getElementById("sub1").value);
      let s2 = parseFloat(document.getElementById("sub2").value);
      let s3 = parseFloat(document.getElementById("sub3").value);
      let s4 = parseFloat(document.getElementById("sub4").value);
      let s5 = parseFloat(document.getElementById("sub5").value);

      // Check for invalid input
       if (isNaN(s1) || isNaN(s2) || isNaN(s3) || isNaN(s4) || isNaN(s5)) {
        document.getElementById("output").innerText = "Please enter valid marks for all subjects.";
        return;
      }

      let total = s1 + s2 + s3 + s4 + s5;
      let average = total / 5;
      let grade = "";

      if (average >= 90) {
        grade = "A+";
      } else if (average >= 80) {
        grade = "A";
      } else if (average >= 70) {
        grade = "B";
      } else if (average >= 60) {
        grade = "C";
      } else if (average >= 50) {
        grade = "D";
      } else {
        grade = "F";
      }

      document.getElementById("output").innerText = 
        `Total Marks: ${total}\nGrade: ${grade}`;
    }