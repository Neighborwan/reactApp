import ReactDOM from 'react-dom';

export function getInnerHtmlFromReactNode(node: JSX.Element) {
  const el = document.createElement('div');
  ReactDOM.render(node, el);
  return el.innerHTML;
}
