function handleSubmit(event) {
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var file = document.getElementById("files").files[0];
  var tags = document.getElementById("tags");
  var tag = tags.options[tags.selectedIndex].value;

  if ((title === "") | (description === "")) {
    event.preventDefault();
  }

  if (title === "") {
    var titleVld = document.getElementById("title-vld");
    titleVld.innerHTML = "cannot be empty*";
    titleVld.style.color = "red";
  } else {
    if (title.length < 10) {
      event.preventDefault();

      var titleVld = document.getElementById("title-vld");
      titleVld.innerHTML = "cannot be so small*";
      titleVld.style.color = "red";
    }
  }

  if (description === "") {
    var descVld = document.getElementById("desc-vld");
    descVld.innerHTML = "cannot be empty*";
    descVld.style.color = "red";
  }

  if (!file) {
    var fileVld = document.getElementById("file-vld");
    fileVld.innerHTML = "File input required";
    fileVld.style.color = "red";
  } else {
    var preview = document.getElementById("preview");
    preview.src = URL.createObjectURL(file);

    alert(
      `Title: ${title}\nDescription: ${description}\nFile: ${file.name}\nTag: ${tag}`
    );
  }
}

function handleFileInput(event) {
  var file = document.getElementById("files").files[0];

  var preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(file);
}
