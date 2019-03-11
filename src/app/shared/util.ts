export function isTrueProperty(val: any): boolean {
  if (typeof val === 'string') {
    val = val.toLowerCase().trim();
    return (val === 'true' || val === 'on' || val === '');
  }
  return !!val;
}

/** @hidden */
const ASSERT_ENABLED = true;

/** @hidden */
function _runInDev(fn: Function) {
  if (ASSERT_ENABLED === true) {
    return fn();
  }
}

/** @hidden */
function _assert(actual: any, reason: string) {
  if (!actual && ASSERT_ENABLED === true) {
    let message = 'IONIC ASSERT: ' + reason;
    console.error(message);
    debugger; // tslint:disable-line
    throw new Error(message);
  }
}

/** @hidden */
export { _assert as assert };