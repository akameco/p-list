import test from 'ava';
import fn from './';

test('show dependences', async t => {
	const x = await fn();
	t.is(x.length, 2);
	t.is(x[0], 'meow');
});

test('show dev dependences', async t => {
	const x = await fn(true);
	t.is(x.length, 2);
	t.is(x[0], 'ava');
});
