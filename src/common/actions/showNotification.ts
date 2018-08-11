import * as Types from '../../../types';
import { Action } from '../../common/action';

/**
 * This action will show a system notification with given title and content
 */
export default class AShowNotification extends Action { 
  // reference name
  public static alias: string = 'showNotification';

  /**
   * Returns a json of the current action. 
   * url and invoke properties of this class depend on this
   */
  public get json(): any {

    const config: Types.IShowNotificationConfig = this.arguments[0];

    return {
      "BTTTriggerClass" : "BTTTriggerTypeKeyboardShortcut",
      "BTTPredefinedActionType" : Types.ACTION.RUN_APPLESCRIPT_IN_BG,
      "BTTInlineAppleScript" : `display notification \"${config.content}\" with title \"${config.title}\"`,
      "BTTAdditionalConfiguration" : "786432",
      "BTTEnabled2" : 1,
      "BTTEnabled" : 1,
    };
  }
}