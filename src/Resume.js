import React from 'react';
import data from './database/data.json';

let Resume = (p) => {
    let info=data.profiles;
    let profile=info[p.location.data.id];

    return (
        <div className="row justify-content-center">
            <div className="col-lg-4 text center">
                <h2> {profile.bio.name} </h2>
            </div>

            <div className="col-lg-8">
                <h4> Summary </h4> <hr />
                <ul>
                    {profile.summary.map((i, index)=> (
                        <li key={index}> {i} </li>
                    ))}
                </ul>

                <h4> Skill set </h4> <hr />
                <p>
                    {profile.skillset.map((j) => (
                        <div>
                            <h5> {j.skill} </h5>
                            <h5>
                                {j.technologies.map((t) => (
                                    <span className="badge badge-pill badge-secondary">   {t}  </span>
                                ))}
                            </h5>
                        </div>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default Resume;