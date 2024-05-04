import { Component } from 'react';
import style from './section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <p className={style.title}>{title}</p>
        {children}
      </section>
    );
  }
}

export default Section;
