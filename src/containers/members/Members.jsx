import React from 'react';
import Team from '../../components/team/Team';
import './members.css';

const membersData = [
  {
    name: 'Tan Wei Xun',
    uowid: '7433347',
    roles: 'Team leader, Software Tester, Documenter',
    github: 'https://github.com/WeiXun',
    email: 'wxtan036@mymail.sim.edu.sg',
  },
  {
    name: 'Joen Tai',
    uowid: '7432100',
    roles: 'Programmer, Documenter, UI Designer',
    github: 'https://github.com/Joennnn',
    email: 'jtai004@mymail.sim.edu.sg',
  },
  {
    name: 'Wee Tee Hian Theodore',
    uowid: '7059279',
    roles: 'Programmer, Software Tester, Documenter',
    github: 'https://github.com/Theodore997',
    email: 'thtjwee001@mymail.sim.edu.sg',
  },
  {
    name: 'Hung Jing Xin',
    uowid: '7436646',
    roles: 'Researcher, Software Tester, Documenter',
    github: 'https://github.com/jxngx',
    email: 'jxhung001@mymail.sim.edu.sg',
  },
  {
    name: 'Sim Jun Wen Joshua',
    uowid: '7432586',
    roles: 'Programmer, Software Tester, Documenter',
    github: 'https://github.com/JoshuaSim24',
    email: 'jwjsim001@mymail.sim.edu.sg',
  },
];

const Members = () => {
  return (
  <div className="fl__members section__padding" id="members">
    <div className="fl__members-heading">
      <h1 className="gradient__text">
        Meet the Team. 
      </h1>
    </div>
    <div className="fl__members-container">
      {membersData.map((item, index) => (
        <Team name={item.name} uowid={item.uowid} roles={item.roles} email={item.email} github={item.github} key={item.name + index} />
      ))}
    </div>
  </div>
  )
}

export default Members
