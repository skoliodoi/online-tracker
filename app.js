new Vue ({
  el: "#app",
  data: {
    text: "Test",
    clientName: '',
    confirmed: '',
    briefType: '',
    setStatus: '',
    whoFor: '',
    whoWith: '',
    startDate: '',
    meetDate: '',
    deadline: '',
    delDate: '',
    tableContents: []
  },
  methods: {
    addRow() {
      this.tableContents.push({
        clientName: this.clientName,
        confirmed: this.confirmed,
        briefType: this.briefType,
        setStatus: this.setStatus,
        whoFor: this.whoFor,
        whoWith: this.whoWith,
        startDate: this.startDate,
        meetDate: this.meetDate,
        deadline: this.deadline,
        delDate: this.delDate
      })
      this.clientName = ""
    }
  }
})