import { EventEmitter } from '@angular/core';
import { Content } from '@ngneat/overview';

export interface CmdkCommandProps {
  /**
   * Label for this command menu. Can be shown visibly.
   */
  label?: Content;
  /**
   * Accessible Label for this command menu. Not shown visibly.
   */
  ariaLabel?: string;
  /**
   * Optionally set to `false` to turn off the automatic filtering and sorting.
   * If `false`, you must conditionally render valid items based on the search query yourself.
   */
  shouldFilter?: boolean;
  /**
   * Custom filter function for whether each command menu item should matches the given search query.
   * It should return a number between 0 and 1, with 1 being the best match and 0 being hidden entirely.
   * By default, uses the `command-score` library.
   */
  filter?: (value: string, search: string) => number;
  /**
   * Optional controlled state of the selected command menu item.
   */
  value?: string;
  /**
   * Event handler called when the selected item of the menu changes.
   */
  valueChanged: EventEmitter<string>;
}

export interface CmdkListProps {
  /**
   * Label for this command menu. Can be shown visibly.
   */
  label?: Content;
  /**
   * Accessible Label for this command menu. Not shown visibly.
   */
  ariaLabel?: string;
}

export interface CmdkGroupProps {
  /**
   * Label for this command menu. Can be shown visibly.
   */
  label?: Content;
  /**
   * Accessible Label for this command menu. Not shown visibly.
   */
  ariaLabel?: string;
}
export interface CmdkListItemProps {
  /**
   * Contextual Value of the list-item
   */
  value: string | undefined;
}
