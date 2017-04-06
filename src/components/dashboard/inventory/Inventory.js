const ReactDataGrid = require('react-data-grid');
const exampleWrapper = require('../../../components/exampleWrapper');
const React = require('react');
var update = require('react-addons-update');
const { Editors, Formatters } = require('react-data-grid-addons');

const { AutoComplete: AutoCompleteEditor, DropDownEditor } = Editors;
const { DropDownFormatter } = Formatters;

// options for priorities autocomplete editor
const priorities = [{ id: 0, title: 'Regular' }, { id: 1, title: 'Decaf' }];
const PrioritiesEditor = <AutoCompleteEditor options={priorities}/>;
const active = [{ id: 0, title: 'True' }, { id: 1, title: 'False' }];
const ActiveEditor = <AutoCompleteEditor options={active} />;

// options for IssueType dropdown editor
// these can either be an array of strings, or an object that matches the schema below.
const issueTypes = [
  { id: 'bug', value: 'bug', text: 'Bug', title: 'Bug' },
  { id: 'improvement', value: 'improvement', text: 'Improvement', title: 'Improvement' },
  { id: 'epic', value: 'epic', text: 'Epic', title: 'Epic' },
  { id: 'story', value: 'story', text: 'Story', title: 'Story' }
];
const IssueTypesEditor = <DropDownEditor options={issueTypes}/>;

const IssueTypesFormatter = <DropDownFormatter options={issueTypes} value="bug"/>;

const Example = React.createClass({
  getInitialState() {
    this._columns = [
      {
        key: 'id',
        name: 'ID',
        width: 80
      },
      {
        key: 'name',
        name: 'Name',
        editable: true
      },
      {
        key: 'coffeeType', //name
        name: 'Coffee Type', //Name
        editable: true
      },
      {
        key: 'inStockBags', //name
        name: 'bags in stock', //Name
        editable: true
      },
      {
        key: 'providerPrice', //name
        name: 'Provider Price', //Name
        editable: true
      },
      {
        key: 'consumerPrice', //name
        name: 'Consumer Price', //Name
        editable: true
      },
      {
        key: 'ozInBag', //name
        name: 'oz Per Bag', //Name
        editable: true
      },
      {
        key: 'isDecaf',
        name: 'Is Decaf',
        editor: PrioritiesEditor
      },
      {
        key: 'isActive',
        name: 'Is Active',
        editor: ActiveEditor
      }, 
      {
        key: 'tags', //name
        name: 'Tags', //Name
        editable: true
      },    
      {
        key: 'description', //name
        name: 'Description', //Name
        editable: true
      },  
      {
        key: 'dateCreated', //name
        name: 'Date Created', //Name
      },   
      {
        key: 'dateModified', //name
        name: 'Date Modified', //Name
      },   
    ];

    return { rows: this.createRows(1000) };
  },

  createRows(numberOfRows) {
    let rows = [];
    for (let i = 1; i < numberOfRows; i++) {
      rows.push({
        id: i,
        name: 'Name ' + i,
        coffeeType: 'Type ' + i,
        inStockBags: 22,
        providerPrice: '$3.00',
        consumerPrice: '$5.00',
        ozInBag: 8.0,
        isDecaf: ['Regular', 'Decaf'][i % 2],
        isActive: ['True', 'False'][i % 2],
        tags: 'holidy',
        description: 'blah blah blah blah',
        dateCreated: '4/4/17',
        dateModified: '4/4/17',
      });
    }

    return rows;
  },

  rowGetter(i) {
    return this.state.rows[i];
  },

  handleGridRowsUpdated({ fromRow, toRow, updated }) {
    let rows = this.state.rows.slice();

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }

    this.setState({ rows });
  },

  render() {
    return (
      <ReactDataGrid
        enableCellSelect={true}
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.state.rows.length}
        minHeight={500}
        onGridRowsUpdated={this.handleGridRowsUpdated} />);
  }
});

const exampleDescription = (
  <p>This example uses the built in <strong>Autocomplete</strong> editor for the priorities column and the <strong>DropdownEditor</strong> for the IssueType column. <strong>You must include the <code>react-data-grid.ui-plugins.js</code> package to use the built in editors.</strong></p>);

module.exports = exampleWrapper({
  WrappedComponent: Example,
  exampleName: 'Built-In Cell Editor Example',
  exampleDescription,
  examplePath: './scripts/example06-built-in-editors.js',
  examplePlaygroundLink: undefined
});