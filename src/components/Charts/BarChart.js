import React, {useState} from 'react'
import BarChartIcon from '@material-ui/icons/BarChart';
import barChartData from '../data/barChart.json'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import {PrimaryButton as FormButton, FormInput, FormH3, 
    FormPara, DFlexPT, DFlex, ChartHeader, MyForm, 
    FlexP, DFlexPTWrap, GraphComponent} from '../styles/Index'
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import BarChartGraph from '../GraphComponents/BarChartGraph';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function BarChart() {

    const [selectedFile, setSelectedFile] = useState(barChartData)
    const [variables, setVariables] = useState([])
    const [yVar, setYVar] = useState("")
    const [xVar, setXVar] = useState([])

    const classes = useStyles();
    
    const {register, handleSubmit} = useForm()

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("file", data.image[0])
        await axios({
            method: "post", url: "http://localhost:5000/file",
            data: formData, headers: { "Content-Type": "multipart/form-data" }
        }); 
        
        let reader = new FileReader()
        reader.readAsText(data.image[0]);
        reader.onload = function() {
            setSelectedFile(JSON.parse(reader.result));
        };
        reader.onerror = function() {
            alert(reader.error);
        }
        preprocess(selectedFile)
    }

    const preprocess = (data) => {
        if (data[0]){
            setVariables(Object.keys(data[0]))
        }
        else{
            alert("Data format not supported")
        }
    }

    const handleClick = () => {
        preprocess(barChartData)
    }

    const handleYvar = (e) => {
        setYVar(e.target.value)
    }

    const handleXvar = (e) => {
        let value = e.target.name;
        if (xVar.includes(value)){
            let filtered = xVar.filter((val) => {
                return val !== value
            })
            setXVar(filtered)
        }
        else{
            let filtered = [...xVar, value]
            setXVar(filtered)
        }
    }

    return (
        <div>
            <ChartHeader>
                <BarChartIcon color="primary" /> &nbsp; Bar chart &nbsp;
                <BarChartIcon style={{color: "green"}} />
            </ChartHeader>

            <MyForm onSubmit={handleSubmit(onSubmit)}>
                <FormPara>Upload a JSON file</FormPara>
                <DFlex>
                    <FormInput {...register("image", { required: "Required",
                    })} type="file" name="image" id="file"></FormInput>
                    <label htmlFor="file">
                        Choose a file ⤒
                    </label>
                    <FormButton type="submit">Submit</FormButton>
                </DFlex>
                <FormPara>Or</FormPara>
                <FormButton onClick={handleClick}>Use Default Data</FormButton>
            </MyForm>

            <Divider variant="middle" />

            {variables.length > 0 && 
            <div>
                <DFlexPT>
                    <FormH3> Rendered Columns: </FormH3>
                    <DFlex>
                        {variables.map((each, id) =>
                            (<FlexP key={id}>{`${id+1}. ${each}`}</FlexP>)
                        )}
                    </DFlex>
                </DFlexPT>
                <DFlexPTWrap>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="Yvar">Select Y-variable: </InputLabel>
                        <Select labelId="Yvar" id="demo-simple-select"
                        value={yVar} onChange={handleYvar}>
                        {variables.map((each, id) =>
                            (<MenuItem value={each} key={id}>
                                {each}
                            </MenuItem>)
                        )}
                        </Select>
                    </FormControl>
                    
                    <Divider orientation="vertical" flexItem />
                    
                    { yVar !== "" && <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Select X variables</FormLabel>
                        <FormGroup>
                            {variables.map((each, id) =>
                                (<FormControlLabel key={id} control={
                                    <Checkbox disabled={each == yVar} onChange={handleXvar}
                                    name={each} />} label={each}/>)
                            )}
                        </FormGroup>
                    </FormControl>}
                </DFlexPTWrap>
            </div>
            }

            {selectedFile && yVar && xVar.length > 0 && 
            <GraphComponent>
                <BarChartGraph data={selectedFile} 
                    yVar={yVar} xVar={xVar} />
            </GraphComponent>}

        </div>
    )
}
