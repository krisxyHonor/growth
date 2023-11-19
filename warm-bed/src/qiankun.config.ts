import {
  registerMicroApps,
  start,
  RegistrableApp,
  FrameworkLifeCycles,
  ObjectType,
} from "qiankun";

const registerApps = <T extends ObjectType>(
  apps: Array<RegistrableApp<T>>,
  lifeCycles: FrameworkLifeCycles<T>
): void => {
  registerMicroApps(apps, lifeCycles);
};

export { registerApps, start };
