var DateTime = luxon.DateTime;
dt = DateTime.local();

new Vue ({
  el: "#app",
  data: {
    showForm: false,
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
    inputEntry: '',
    tableRows: []
  },
  methods: {
    addRow() {
      this.tableRows.push({
        data: {
          clientName: this.clientName,
          confirmed: this.confirmed,
          briefType: this.briefType,
          setStatus: this.setStatus,
          whoFor: this.whoFor,
          whoWith: this.whoWith,
          startDate: DateTime.fromISO(this.startDate),
          meetDate: DateTime.fromISO(this.meetDate),
          deadline: DateTime.fromISO(this.deadline),
          delDate: DateTime.fromISO(this.delDate),
          inputShow: this.inputShow,
          inputEntry: this.inputEntry,
          'marsh-cl': '',
          'marsh-ca': '',
          'mercer-cl': '',
          'mercer-ca': '',
          'lindsey': '',
          'mmb': '',
          'gc-cl': "",
          'gc-ca': "",
          'ow-cl': "",
          'ow-ca': "",
          'b2b': "",
          'mmc': "",
          'bio': ""
        },
        isEditable: [
          'marsh-cl',
          'marsh-ca',
          'mercer-cl',
          'mercer-ca',
          'lindsey',
          'mmb',
          'gc-cl',
          'gc-ca',
          'ow-cl',
          'ow-ca',
          'b2b',
          'mmc',
          'bio'
        ],
        editValue: {
          'marsh-cl': '',
          'marsh-ca': '',
          'mercer-cl': '',
          'mercer-ca': '',
          'lindsey': '',
          'mmb': '',
          'gc-cl': "",
          'gc-ca': "",
          'ow-cl': "",
          'ow-ca': "",
          'b2b': "",
          'mmc': "",
          'bio': ""
        }
      })
      this.restart()
    },
    saveCell(row, column) {
      row.isEditable = row.isEditable.filter(it => it !== column)
      row.data[column] = row.editValue[column]
    },
    editCell(row, column) {
      row.isEditable.push(column)
      row.editValue[column] = row.data[column]
    },
    formatDate(date) {
      return date.toLocaleString(DateTime.DATE_MED)
    },
    dateTill(date) {
      return date.toRelative()
    },
    restart() {
      this.clientName = '';
      this.confirmed = '';
      this.briefType = '';
      this.setStatus = '';
      this.whoFor = '';
      this.whoWith = '';
      this.startDate = '';
      this.meetDate = '';
      this.deadline = '';
      this.delDate = '';
      this.inputEntry = '';
    },
    cancel() {
      this.restart();
      this.showForm = false;
    },
  }
})