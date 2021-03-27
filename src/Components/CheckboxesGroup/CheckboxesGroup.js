import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup({
  Title,
  label1,
  label2,
  label3,
  checked1,
  checked2,
  checked3,
  handleChange
}) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <h3 style={{ padding: "2px", display: "block", marginTop: "0", marginBottom: "0" }}>{Title}</h3>
      <FormControl component="fieldset" className={classes.formControl} style={{ margin: '0', marginTop: '12px' }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={checked1} onChange={(e) => handleChange(e, Title, label1)} name="checked1" />}
            label={label1}
          />
          <FormControlLabel
            control={<Checkbox checked={checked2} onChange={(e) => handleChange(e, Title, label2)} name="checked2" />}
            label={label2}
          />
          <FormControlLabel
            control={<Checkbox checked={checked3} onChange={(e) => handleChange(e, Title, label3)} name="checked3" />}
            label={label3}
          />
        </FormGroup>
      </FormControl>

    </div>
  );
}
