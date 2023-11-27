interface CodebookItem {
  code: string;
  names: { [key: string]: string };
  order: number;
}

export default CodebookItem;
