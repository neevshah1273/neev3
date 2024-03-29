import React from "react";
import './Experience.css';

const Experience = (props) => {


    if(props.data){
        var experiences = props.data;
        console.log(props.data);
    }

    let colors=[
        'bg-1',
        'bg-2',
        'bg-3',
        'bg-2',
        'bg-3',
        'bg-1',
        'bg-3',
        'bg-1',
        'bg-2'
    ]

    return(
        props.data?
        <div id="experience">
            <div className="text-5xl text-white self-center items-center justify-center content-center text-center">
            Experience
        </div>
        {
        experiences.map((exp,index) =>
            <div className="container-fluid">
            <div className="flex flex-row">
                <div className="row card bgs-1 mx-5">
                    <div className="card-body pl-5">
                        <div className="row pb-3">
                            <div className="col-7 float-left">
                                <div><b>{exp.position}</b>,&nbsp;
                                {exp.company}</div>
                            </div>
                            <div className="col-4 text-right float-right">
                                <div> {exp.Duration} | {exp.location}
                                </div>
                            </div>
                        </div>    
                        <ul className="list-disc">
                            {exp.Details?.map((det) =>
                                <li>{det}</li>)
                            }
                        </ul>
                        <div className="row">
                            Technologies: &nbsp; &nbsp;
                            {exp.Tech_Stacks?.map((stack)=> <div> {stack} &nbsp;</div>)}
                        </div>
                    </div>
                </div>
                <div className="Styles_dottedLine__2Qarm">
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                </div>
            </div>
        </div>
        )}
        </div>
        :<div></div>
        
        
    )
}

export default Experience;