// Copyright (c) 2019 rohmanhm
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import vaper from 'vaper'

export default function<T = any>(data: T): T {
  return vaper(null, undefined)(data)
}
