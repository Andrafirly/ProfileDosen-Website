document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const lecturerId = urlParams.get("lecturer");

  if (lecturerId) {
    fetch(`data/lecturers/${lecturerId}.json`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("lecturer-name").textContent = data.name;
        document.getElementById("lecturer-gender").textContent = data.gender;
        document.getElementById("lecturer-university").textContent =
          data.university;
        document.getElementById("lecturer-study-program").textContent =
          data.studyProgram;
        document.getElementById("lecturer-position").textContent =
          data.position;
        document.getElementById("lecturer-education").textContent =
          data.education;
        document.getElementById("lecturer-employment-status").textContent =
          data.employmentStatus;
        document.getElementById("lecturer-activity-status").textContent =
          data.activityStatus;
        // Update university history content
        const universityHistoryContainer = document.getElementById(
          "lecturer-university-history"
        );
        universityHistoryContainer.textContent = ""; // Clear existing content
        data.universityHistory.forEach((historyItem) => {
          const paragraph = document.createElement("p");
          paragraph.textContent = historyItem;
          universityHistoryContainer.appendChild(paragraph);
        });
        // Update academic degree content
        const academicDegreeContainer = document.getElementById(
          "lecturer-academic-degree"
        );
        academicDegreeContainer.textContent = ""; // Clear existing content
        data.academicDegree.forEach((degreeItem) => {
          const paragraph = document.createElement("p");
          paragraph.textContent = degreeItem;
          academicDegreeContainer.appendChild(paragraph);
        });
        // Update research content
        const researchContainer = document.getElementById("lecturer-research");
        data.research.forEach((researchItem) => {
          const paragraph = document.createElement("p");
          paragraph.textContent = researchItem;
          researchContainer.appendChild(paragraph);
        });

        // Update publications content
        const publicationsContainer = document.getElementById(
          "lecturer-publications"
        );
        publicationsContainer.textContent = ""; // Clear existing content
        data.publications.forEach((publicationItem) => {
          const paragraph = document.createElement("p");
          paragraph.textContent = publicationItem;
          publicationsContainer.appendChild(paragraph);
        });
        // Update contact content
        const contactContainer = document.getElementById("lecturer-contact");
        contactContainer.textContent = ""; // Clear existing content
        data.contact.forEach((contactItem) => {
          const paragraph = document.createElement("p");
          paragraph.textContent = contactItem;
          contactContainer.appendChild(paragraph);
        });
        // Update photo
        document.getElementById(
          "lecturer-photo"
        ).src = `images/dosen/${data.photo}`;
      })
      .catch((error) => {
        console.error("Error loading lecturer data:", error);
      });
  } else {
    console.log("No lecturer ID specified.");
  }
});
