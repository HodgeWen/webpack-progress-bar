import { ProgressPlugin } from 'webpack'

type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 
'cyan' | 'white' | 'gray' | 'grey'

declare class WebpackProgessBar extends ProgressPlugin {
  constructor(options?: {
    /** 总进度背景色 */
    incomplete?: {
      /** 背景颜色 默认 'white' */
      bg: Color;
      /** 背景内容 默认' ' */
      content: string;
    };
  
    /** 当前进度背景色 */
    complete?: {
      /** 背景颜色 默认 'green' */
      bg: Color,
      /** 背景内容 默认 ' ' */
      content: string;
    };
  
    /** 进度条字符宽度 默认25 */
    width?: number;
  
    /** 是否每次更新都清除 默认true */
    clear?: boolean;
  
    /** 进度条总进度 默认100 */
    total?: number;
  });

  private _init(): void;
}


export = WebpackProgessBar