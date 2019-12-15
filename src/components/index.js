import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-removable-list';
const DEFAULT_TEMPLATE = ({ item }, cb) => {
  return (
    <div className="is-item" key={item.value} value={item.value}>
      {item.label}
      <button onClick={cb} className="is-action">
        x
      </button>
    </div>
  );
};

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: [],
    template: DEFAULT_TEMPLATE,
    onChange: noop
  };

  static getDerivedStateFromProps(inProps, inState) {
    const { items } = inProps;
    if (items !== inState.value) {
      return { value: items };
    }
    return null;
  }

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.items
    };
  }

  get childView() {
    const { template } = this.props;
    const _value = this.state.value;
    return _value.map((item, index) => {
      const target = { item, index };
      const cb = this.onRemove.bind(this, target);
      return template(target, cb);
    });
  }

  onRemove = ({ index }) => {
    const { onChange } = this.props;
    const _value = this.state.value;
    const target = { value: _value };
    _value.splice(index, 1);
    this.setState(target, () => {
      onChange({ target });
    });
  };

  render() {
    const { className, items, template, ...props } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {this.childView}
      </div>
    );
  }
}
