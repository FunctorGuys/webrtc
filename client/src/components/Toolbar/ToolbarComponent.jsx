import React from 'react';
import PropTypes from 'prop-types';
import Caret from 'elements/Caret';
import { Modal } from 'antd';
import SettingsModal from 'modals/SettingsModal';
import {
  LeftActions, RightActions, Control,
} from './atomics';
import { StyledToolbar } from './styled';

export default class ToolbarComponent extends React.Component {
  static propTypes = {
    isShowChat: PropTypes.bool.isRequired,
    isShowToolbar: PropTypes.bool.isRequired,
    toggleChat: PropTypes.func.isRequired,
    toggleToolbar: PropTypes.func.isRequired,
    toggleShareCreen: PropTypes.func.isRequired,
    isSharingScreen: PropTypes.bool.isRequired
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props);

    this.state = {
      isShowModalSettings: false,
    };
  }

  openModalSettings = () => {
    this.setState({
      isShowModalSettings: true
    });
  }

  closeModalSettings = () => {
    this.setState({
      isShowModalSettings: false
    });
  }

  handleChangeStream = (stream) => {
    console.log('handleChangeStream');
  }

  render() {
    return (
      <StyledToolbar hiding={!this.props.isShowToolbar}>
        <StyledToolbar.TogglerWrapper>
          <StyledToolbar.Toggler onClick={this.props.toggleToolbar}>
            <Caret direction={this.props.isShowToolbar ? 'down' : 'up'} />
          </StyledToolbar.Toggler>
        </StyledToolbar.TogglerWrapper>

        <StyledToolbar.Actions>
          <LeftActions
            toggleChat={this.props.toggleChat}
            toggleShareCreen={this.props.toggleShareCreen}
            isSharingScreen={this.props.isSharingScreen}
          />
        </StyledToolbar.Actions>

        <StyledToolbar.Controls>
          <Control />
        </StyledToolbar.Controls>

        <StyledToolbar.Actions>
          <RightActions
            openModalSettings={this.openModalSettings}
          />
        </StyledToolbar.Actions>

        <Modal
          title="Settings"
          destroyOnClose
          visible={this.state.isShowModalSettings}
          onCancel={this.closeModalSettings}
          footer={null}
          width={600}
        >
          <SettingsModal onOk={this.handleChangeStream} onCancel={this.closeModalSettings} />
        </Modal>
      </StyledToolbar>
    );
  }
}
