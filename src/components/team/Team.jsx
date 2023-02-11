import React from 'react'
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import './team.css';

const Team = ({ name, uowid, roles, github, email }) => {
  //const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="filelock__team-container__members">
      <div className="filelock__team-container__members-names">
        <h1>{name}</h1>
        <h3>{roles}</h3>
        <p>{uowid}</p>
      </div>
      <div className="filelock__team-container__members-icon">
        <AiOutlineMail color="#fff" size={27} onClick={() => window.location = 'mailto:' + {email}}/>
        <AiFillGithub color="#fff" size={27} onClick={() => window.location.href = github} />
      </div>
    </div>
  )
}

export default Team