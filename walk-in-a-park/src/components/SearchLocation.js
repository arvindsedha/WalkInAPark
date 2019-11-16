import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     fontFamily: 'Rokkitt',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),

//   },
// }));

// export default function SearchLocation(props) {
//   const classes = useStyles();

//   return (
//     <div className={classes.container}>
//       <form onSubmit={props.getLocation} noValidate autoComplete="off">
//         <div style={
//           {
//             background: 'white',
//             border: '2px solid black',
//             borderRadius: '40px',
//             height: '8vh',
//             width: '30vw',
//           }}>
//           <select value={props.input} onChange={props.onChange}>

//             <option key={1} value="Nuuksio" />
//             <option key={2} value="AnotherPark" />

//             ))}
//           </select>
//           <input
//             style={
//               {
//                 border: 'none',
//                 height: '4vh',
//                 width: '20vw',
//                 fontSize: '5vh',
//                 paddingTop: '7px',
//                 margin: '7px 5px 0px -20px'

//               }}

//           // className={classes.textField}
//           // placeholder='Nuuksio'
//           // margin="normal"
//           // value=
//           // onChange={props.onChange}
//           />
//         </div>
//         <div style={
//           {

//             fontSize: '2.2vh',
//             color: 'black'

//           }}>Forecasting Finlands national park visitors</div>
//         <button className="search-button" type="submit">
//           <ArrowDownwardIcon />
//         </button>

//       </form>
//     </div>
//   );
// }

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    background: 'white',
    border: '2px solid black',
    borderRadius: '40px',
    height: '8vh',
    width: '30vw',
  }
  ,
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: 'Nuuksio',

  });

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl onSubmit={props.getLocation} className={classes.formControl}>

        <Select
          style={
            {
              border: 'none',
              height: '4vh',
              width: '20vw',
              fontSize: '3.2vh',
              paddingTop: '7px',
              margin: '5px auto '

            }}
          native
          value={state.name}
          onChange={handleChange('name')}
          inputProps={{
            name: 'name',

          }}
        >

          <option value={1}>Nuuksio</option>
          <option value={2}>Another One</option>
          <option value={3}>Another Two</option>
        </Select>
      </FormControl>
      <div style={
        {

          fontSize: '2.2vh',
          color: 'black'

        }}>Forecasting Finlands national park visitors</div>
      <button type="submit">
        <ArrowDownwardIcon />
      </button>

    </div>

  )
}