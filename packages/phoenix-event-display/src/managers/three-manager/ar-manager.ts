import { PerspectiveCamera, Scene, Vector3 } from 'three';
import { SceneManager } from './scene-manager';
import { XRManager, XRSessionType } from './xr-manager';

// NOTE: This was created on 28/06/2021
// It might get outdated given how WebXR is still a work in progress

// LAST UPDATED ON 29/06/2021

/**
 * AR manager for AR related operations.
 */
export class ARManager extends XRManager {
  /** Session type to use for AR. */
  static readonly SESSION_TYPE: string = 'immersive-ar';
  /** Previous values of scene scale, camera near and camera position. */
  private previousValues = {
    sceneScale: 1,
    cameraNear: 10,
    cameraPosition: new Vector3(1, 0, 1),
  };

  /**
   * Create the AR manager.
   * @param scene The three.js scene.
   * @param camera Camera in the scene.
   * @override
   */
  constructor(private scene: Scene, private camera: PerspectiveCamera) {
    super(XRSessionType.AR);
  }

  /**
   * Callback for when the AR session is started.
   * @override
   * @param session The AR session.
   */
  protected async onXRSessionStarted(session: any) {
    this.previousValues.sceneScale = this.scene.scale.x;
    this.previousValues.cameraNear = this.camera.near;
    this.previousValues.cameraPosition = this.camera.position.clone();
    this.scaleScene(0.00001);
    this.camera.near = 0.01;
    this.camera.position.set(0, 0, 0.1);
    this.renderer.xr.setReferenceSpaceType('local');
    await super.onXRSessionStarted(session);
  }

  /**
   * Callback when the AR session ends.
   * @override
   */
  protected onXRSessionEnded() {
    this.scaleScene(this.previousValues.sceneScale);
    this.camera.near = this.previousValues.cameraNear;
    this.camera.position.copy(this.previousValues.cameraPosition);
    super.onXRSessionEnded();
  }

  /**
   * Scale the three.js scene.
   * @param scale Number to scale the scene to.
   */
  private scaleScene(scale: number) {
    [
      SceneManager.EVENT_DATA_ID,
      SceneManager.GEOMETRIES_ID,
      SceneManager.LABELS_ID,
    ].forEach((groupName) => {
      this.scene.getObjectByName(groupName).scale.setScalar(scale);
    });
  }
}
