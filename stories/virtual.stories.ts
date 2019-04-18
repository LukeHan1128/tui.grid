import { storiesOf } from '@storybook/html';
import Grid from '../src/grid';
import '../src/css/grid.css';

const stories = storiesOf('Virtual Scrolling', module);

const data = [];
const columns = [];
const ROW_COUNT = 10000;
const COL_COUNT = 10;

interface AnyIndex {
  [propName: string]: any;
}

stories.add('Sample', () => {
  const data = [];
  const columns = [];

  for (let i = 0; i < ROW_COUNT; i += 1) {
    const row: AnyIndex = { id: i };
    for (let j = 0; j < COL_COUNT; j += 1) {
      row['c' + j] = (Math.random() * 100000000000).toFixed();
    }
    data.push(row);
  }

  for (let i = 0; i < COL_COUNT; i += 1) {
    const name = 'c' + i;
    columns.push({ name, title: name });
  }

  const el = document.createElement('div');
  const width = 1000;
  const bodyHeight = 800;

  console.time('grid');
  const grid = new Grid({ el, data, columns, width, bodyHeight });
  console.timeEnd('grid');

  return el;
});