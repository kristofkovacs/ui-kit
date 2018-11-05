import * as React from 'react';
import { Image as Base, ImageProps as BaseProps } from 'rebass';

/**
 *
 * @visibleName Main Button
 *
 */

export const Icon: React.SFC<BaseProps> = (props: BaseProps) => <Base width={50} height={50} {...props} />;
