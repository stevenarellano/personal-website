export type TalkInfo = {
  title: string;
  description?: string;
  venue: string;
  date: string;
  link?: string;
};

const TALKS: TalkInfo[] = [
  {
    title: 'A Primer On Initialization',
    description: 'A lightning talk on initialization techniques in C++ presented at CppCon 2024.',
    venue: 'CppCon 2024',
    date: '2024',
  },
];

export default TALKS; 