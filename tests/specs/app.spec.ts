import {it, describe, expect, inject} from 'angular2/testing';
import {APP_ID} from 'angular2/core';
import {SpendApp} from "../../app/app";

describe('default test injector', () => {
  it('should provide default id', inject([APP_ID], (id) => {
    expect(id).toBe('a');
  }));
});
