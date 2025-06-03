import { TypeAnimation } from 'react-type-animation';

const Loading = () => {
  return (
    <TypeAnimation
  style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
  sequence={[
    `Initializing portfolio engine...\n
        Fetching data...\n
        Compiling ...\n
        Almost there!\n`,// actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
    1000,
    '',
  ]}
  repeat={Infinity}
/>
  );
};
export default Loading;