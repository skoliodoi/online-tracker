var DateTime = luxon.DateTime;
dt = DateTime.local();

new Vue ({
  el: "#app",
  data: {
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
      console.dir(this.startDate)
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
      this.clientName = '';
    },
    saveCell(row, column) {
      console.log(123)
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
    }
  }
})