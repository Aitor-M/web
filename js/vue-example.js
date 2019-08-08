new Vue({
  el: '#app',
  created: function() {
    var notes = localStorage.getItem('notes');
    if (notes != null) {
      this.notes = JSON.parse(notes);
    }
  },
  data: {
    notes: [
      {title: "Babylonia", content: "Babylon is one of the game's hardest nations to face, having strengths in both defence and science, and is a good introductory Civ for scientific victories. This guide goes into plenty of detail about Babylonian strategies, uniques and how to play against them.", date: moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")},
      {title: "Japan", content: "Unlike most other Civs that work best at domination, Japan is less restricted to a particular era making them more able to adjust around other Civs' strengths. This guide goes into plenty of detail about Japanese strategies, uniques and how to play against them.", date: moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")},
      {title: "Persia", content: "With speed bonuses, a strength bonus that works on cities, fast-healing Spearmen and a happiness-giving Bank, Persia takes out a lot of the annoyances of war in a rather unique playstyle. This guide goes into plenty of detail about Persian strategies, uniques and how to play against them.", date: moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")},
      {title: "Germany ", content: "Germany can build a large, strong army quickly and cheaply, and has strength both in the earlier and later stages of the game. This guide goes into plenty of detail about German strategies, uniques and how to play against them.", date: moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")},
      {title: "England", content: "The only Civ with two unique ranged units, England is a devastating opponent to face in the mid-game. This guide goes into plenty of detail about English strategies, uniques and how to play against them.", date: moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")}
    ],

    selectedNoteIndex: -1,

    selectedNote: {
      title: "",
      content: "",
      date: ""
    },

    viewMode: false,
    editMode: false
  },

  methods: {
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a")
    },

    viewSelectedNote: function (index) {
      this.viewMode = true;
      this.editMode = false;
      this.selectedNoteIndex = index;
      Object.assign(this.selectedNote, this.notes[index]);
    },

    editSelectedNote: function (index) {
      this.viewMode = false;
      this.editMode = true;
      this.selectedNoteIndex = index;
      Object.assign(this.selectedNote, this.notes[index]);
    },

    saveData: function() {
      localStorage.setItem('notes', JSON.stringify(this.notes));
    },

    deleteNote: function(index) {
      this.viewMode = true;
      this.editMode = false;
      if (index === this.selectedNoteIndex) {
        this.selectedNoteIndex = -1;
        this.selectedNote = {
          title: "",
          content: "",
          date: ""
        };
      }
      this.notes.splice(index, 1);
      this.saveData();
    },

    addNewNote: function() {
      var empty = {
        title: "Empty Note",
        content: "",
        date: this.formatDate(Date.now())
      };
      this.notes.push(empty);
      this.saveData();
    },

    saveNote: function() {
      this.viewMode = true;
      this.editMode = false;
      console.log(this.selectedNote.title);
      console.log(this.notes[this.selectedNoteIndex].title);
      console.log(this.selectedNote.content);
      console.log(this.notes[this.selectedNoteIndex].content);
      
      if (this.selectedNote.title !== this.notes[this.selectedNoteIndex].title || 
          this.selectedNote.content !== this.notes[this.selectedNoteIndex].content) {
        this.selectedNote.date = "Modified: " + this.formatDate(Date.now());
        console.log(this.selectedNote.date);
        
      }
      
      Object.assign(this.notes[this.selectedNoteIndex], this.selectedNote);
      this.saveData();
    },
    
    moveUp: function(index) {
      this.notes.splice(index - 1, 2, this.notes[index], this.notes[index - 1] );
      this.saveData();
    },

    moveDown: function(index) {
      this.notes.splice(index, 2, this.notes[index + 1], this.notes[index] );
      this.saveData();
    }    
  }
});

