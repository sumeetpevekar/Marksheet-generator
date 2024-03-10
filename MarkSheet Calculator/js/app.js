window.onload= function(){
    // adding subject field
    var addSubjectsBtn = document.getElementById("add-subjects");
    addSubjectsBtn.onclick= function(){
        var div = document.createElement("div");
        div.id="horizontal-dynamic";
        div.className="horizontal-dynamic-class";
    
        // subject
        var subject = document.createElement("input");
        subject.type="text";
        subject.name="subjects";
        subject.placeholder="Subjects Name";
    
        // fullMarks
        var fullMarks = document.createElement("input");
        fullMarks.type="number";
        fullMarks.name="fullMarks";
        fullMarks.placeholder="full Marks";
        fullMarks.value="100";
    
        // obtainedMarks
        var obtainedMarks = document.createElement("input");
        obtainedMarks.type="number";
        obtainedMarks.name="obtainedMarks";
        obtainedMarks.placeholder="obtained Marks";
        obtainedMarks.className="obtained-marks"
        
        
        // delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML="<i class='fa-solid fa-trash'></i>";
        deleteBtn.style.cursor="pointer";
        deleteBtn.type="button";
        deleteBtn.className="deleteBtn";
        
        // adding input inside div tag
        div.append(subject, fullMarks, obtainedMarks, deleteBtn);

        // adding
        var dynamicArea = document.getElementById("dynamic-area");
        dynamicArea.append(div);
        
        // Creating Subject tr
        var subjectTitleRow = document.createElement("tr");
        subjectTitleRow.style.textAlign="center";
        subjectTitleRow.style.border=1;

        var subjectTd = document.createElement("td");
        subjectTd.colSpan= "3";

        var fullMarksTd = document.createElement("td");
        fullMarksTd.innerHTML=100;
        // fullMarksTd.innerHTML="Full Marks";
        
        var obtainedMarksTd = document.createElement("td");
        obtainedMarksTd.colSpan= "2";
        // obtainedMarksTd.innerHTML="Obtained Marks";

        subjectTitleRow.append(subjectTd, fullMarksTd, obtainedMarksTd);

        var subjectBody = document.getElementById("subject-body");
        subjectBody.append(subjectTitleRow);


        // live preview subject and marks input 

        subject.oninput = function(){
            subjectTd.innerHTML = this.value;
        }

        fullMarks.oninput = function(){
            fullMarksTd.innerHTML = this.value;
        }

        obtainedMarks.oninput = function(){
            obtainedMarksTd.innerHTML = this.value;

            // calculate total marks
            var totalMarks = 0;
            var obm = document.getElementsByClassName("obtained-marks");
            for(var i=0; i < obm.length; i++){
                var num = Number(obm[i].value);
                totalMarks = totalMarks+num;
            }
            var finalMarks = document.getElementById("final-marks");
            finalMarks.innerHTML= totalMarks;

            // calculate percentage
            var noOfSubjects = obm.length;
            var finalPercentage = parseInt(totalMarks/noOfSubjects);
            var percentage = document.getElementById("percentage")
            percentage.innerHTML= finalPercentage+"%";
            
            // calculate grade
            var gradeText = document.getElementById("grade-text");
            if (finalPercentage >= 90) {
                gradeText.innerHTML = "A+";
            }else if(finalPercentage >= 80){
                gradeText.innerHTML= "A";
            }else if(finalPercentage >= 75){
                gradeText.innerHTML= "B+";
            }else if(finalPercentage >= 70){
                gradeText.innerHTML= "B";
            }else if(finalPercentage >= 65){
                gradeText.innerHTML= "C+";
            }else if(finalPercentage >= 60){
                gradeText.innerHTML= "C";
            }else if(finalPercentage >= 55){
                gradeText.innerHTML= "D+";
            }else if(finalPercentage >= 50){
                gradeText.innerHTML= "D";
            }else if(finalPercentage >= 40){
                gradeText.innerHTML= "E";
            }else if(finalPercentage >= 0){
                gradeText.innerHTML= "F";
            }else {
                gradeText.innerHTML = "Nan";
            }
        }
        
        // delete the rows
        deleteBtn.onclick= function(){
            div.remove();
            subjectTitleRow.remove();
        }

    }

    // upload and preview student img
    var studentPic = document.getElementById("student-pic-input")
    studentPic.onchange= function(){
        var file = this.files[0];
        console.log(file);
        var url = URL.createObjectURL(file);
        console.log(url);
        var studentImg = document.getElementById("student-img")
        studentImg.src = url;
        studentImg.style.po
    }

    // upload and preview school img
    var schoolPic= document.getElementById("school-pic-input")
    schoolPic.onchange= function(){
        var file = this.files[0];
        console.log(file);
        var url = URL.createObjectURL(file)
        console.log(url);
        var schoolImg = document.getElementById("school-img")
        schoolImg.src = url;
    }

    // live preview on school name
    var schoolNameInput = document.getElementById("schoolNameInput")
    schoolNameInput.oninput= function(){
        // alert()
        var schoolName = document.getElementById("school-name")
        schoolName.innerText = this.value;
    }
    // live preview on school tagline
    var schoolTaglineInput = document.getElementById("schoolTaglineInput")
    schoolTaglineInput.oninput= function(){
        // alert()
        var schoolTagline = document.getElementById("school-tagline")
        schoolTagline.innerText = this.value;
    }
    // live preview on student name
    var studentNameInput = document.getElementById("studentNameInput")
    studentNameInput.oninput= function(){
        // alert()
        var studentName = document.getElementById("student-name")
        studentName.innerText = this.value;
    }
    // live preview on father name
    var fatherNameInput = document.getElementById("fatherNameInput")
    fatherNameInput.oninput= function(){
        // alert()
        var fatherName = document.getElementById("father-name")
        fatherName.innerText = this.value;
    }
    // live preview on date of birth
    var dateOfBirthInput = document.getElementById("dateInput")
    dateOfBirthInput.oninput= function(){
        // alert()
        var dateOfBirth = document.getElementById("date-input")
        dateOfBirth.innerText = this.value;
    }
    // live preview on gender
    var genderInput = document.getElementById("genderInput")
    genderInput.onchange= function(){
        // alert()
        var gender = document.getElementById("gender-text")
        gender.innerText = this.value;
        gender.style.textTransform="capitalize";
    }
    // live preview on class
    var classInput = document.getElementById("classInput")
    classInput.oninput= function(){
        // alert()
        var studentClass = document.getElementById("class-text")
        studentClass.innerText = this.value+"th";
    }
    // live preview on roll no
    var rollNoInput = document.getElementById("rollNoInput")
    rollNoInput.oninput= function(){
        // alert()
        var studentRollNo = document.getElementById("rollNo-text")
        studentRollNo.innerText = this.value;
    }

    // getting text width
    var findTextWidth = function (text, fontSize){
        var textWidth = doc.getTextDimensions(text,{
            fontSize: fontSize
        }).w;
        return textWidth;
    }

    
     // export to pdf
     var generate = document.getElementById("generate")
     generate.onclick= function(){
         html2canvas(document.getElementById("result-card")).then(function (canvas){
        // document.body.appendChild(canvas);
        var imageData = canvas.toDataURL('image/png');
        var doc = new jsPDF()
        // doc.addImage(imageData, 'PNG', 10, 10, 200, 300);
        const imgProps= doc.getImageProperties(imageData);
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(imageData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        doc.save('result.pdf');
    });
    }

}