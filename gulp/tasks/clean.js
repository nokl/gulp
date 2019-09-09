import del from 'del';
import { DEST } from '../conf';

/**
 * 出力先のディレクトリを空にする
 */
export function clean() {
	return del([DEST]).then((e) => {
		console.log(`delete successful! dir: ${DEST}`);
	});
}