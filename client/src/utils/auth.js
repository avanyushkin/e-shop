import {testUsers} from "../fake-data/test-users";

export function fakeAuthenticate(login, password) {
  return testUsers.some((it) => it.login === login && it.password == password);
}