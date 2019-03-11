const newCandidates = [
    { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
    { name: "Mario", skills: ["Python", "AWS"] },
    { name: "Jacquline", skills: ["JavaScript", "Azure"] },
    { name: "Kathy", skills: ["JavaScript", "Java"] },
    { name: "Anna", skills: ["JavaScript", "AWS"] },
    { name: "Matt", skills: ["PHP", "AWS"] },
    { name: "Matt", skills: ["PHP", ".Net", "Docker"] },
  ];

  function removeRowsFromTable(table) {
    const rows = table.getElementsByTagName("tr");

    while (rows.length > 1) {
      table.deleteRow(1);
    }
  }

  function insertCandidate(tbody, name, skills) {
    const newRow = tbody.insertRow();
    const nameCell = newRow.insertCell();
    const skillCell = newRow.insertCell();

    const candidateName = document.createTextNode(name);
    const candidateSkills = document.createTextNode(skills.join(', '));

    nameCell.appendChild(candidateName);
    skillCell.appendChild(candidateSkills);
  }

  function addCandidatesToTable(table, candidates) {
    candidates.forEach(candidate => insertCandidate(table, candidate.name, candidate.skills));
  }

  function filterCandidateBySkill(candidates, skill) {
    let fcandidates = []
    candidates.forEach(function(candidate) {
      candidate.skills.forEach(function (skills){
        if(skills === skill){ 
          fcandidates.push(candidate);
        }
      });
    });
    return fcandidates
    }
            

// create title for JavaScript table
  const tableTitle = document.createElement('h1');
  const title = document.createTextNode('JavaScript Candidates')
  tableTitle.appendChild(title)
  //create table
  const candidatesTable = document.getElementById("candidates_example");
  const newCandidatesTable = candidatesTable.cloneNode(true);
  removeRowsFromTable(newCandidatesTable)
  // add filtered candidates to table 
  const newTbody = newCandidatesTable.getElementsByTagName('tbody')[0];
  const JavaScriptCandidates = filterCandidateBySkill(newCandidates, 'JavaScript')
  addCandidatesToTable(newTbody, JavaScriptCandidates)
  // render title and table 
  document.body.appendChild(tableTitle);
  document.body.appendChild(newCandidatesTable);
  
  // create title for AWS table
  const tableTitle1 = document.createElement('h1');
  const title1 = document.createTextNode('AWS Candidates')
  tableTitle1.appendChild(title1);
  // create table
  const candidatesTable1 = document.getElementById("candidates_example");
  const newCandidatesTable1 = candidatesTable1.cloneNode(true);
  removeRowsFromTable(newCandidatesTable1);
  // add filtered candidates to table
  const newTbody1 = newCandidatesTable1.getElementsByTagName('tbody')[0];
  const AwsCandidates = filterCandidateBySkill(newCandidates, 'AWS')
  addCandidatesToTable(newTbody1, AwsCandidates)
  //render title and table 
  document.body.appendChild(tableTitle1)
  document.body.appendChild(newCandidatesTable1);

  // create title for AWS table
  const tableTitle2 = document.createElement('h1');
  const title2 = document.createTextNode('PHP Candidates')
  tableTitle2.appendChild(title2);
  // create table
  const candidatesTable2 = document.getElementById("candidates_example");
  const newCandidatesTable2 = candidatesTable1.cloneNode(true);
  removeRowsFromTable(newCandidatesTable2);
  // add filtered candidates to table
  const newTbody2 = newCandidatesTable2.getElementsByTagName('tbody')[0];
  const phpCandidates = filterCandidateBySkill(newCandidates, 'PHP')
  addCandidatesToTable(newTbody2, phpCandidates)
  //render title and table 
  document.body.appendChild(tableTitle2)
  document.body.appendChild(newCandidatesTable2);
  
  