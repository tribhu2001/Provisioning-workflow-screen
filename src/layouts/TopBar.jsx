import { TopBar, TopBarLeft, TopBarRight } from '../components/Form';

const TopBarLayout = ({credits}) => {
  return (
    <TopBar>
      <TopBarLeft>
        <span><a href="#">Provisioning</a></span>
        <span> / </span>
        <span><a href="#">Relational Databases</a></span>
        <span> / </span>
        <span>Oracle Server</span>
      </TopBarLeft>
      <TopBarRight>
        <span>Credits: ${credits}</span>
        <span> | </span>
        <img className='icon-button' src='images/speaker.svg' />
        <img className='icon-button' src='images/help.svg' />
        <img className='icon-button' src='images/notification.svg' />
        <img className='icon-button' src='images/Avatar.svg' />
      </TopBarRight>
    </TopBar>
  );
};

export default TopBarLayout;