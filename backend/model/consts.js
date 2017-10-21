export const env_name = process.env.CB_ENV_NAME;
export const coinfirm_api = process.env.CB_COINFIRM_API;
export const coinfirm_api_token_encrypted = process.env.CB_ENC_COINFIRM_API_TOKEN;

export const utf_8_encoding = 'utf-8';
export const base64_encoding = 'base64';
export const hex_encoding = 'hex';
export const sha1_hash = 'sha1';
export const sha256_hash = 'sha256';
export const default_encoding = utf_8_encoding;

export const stream_name = env_name + '-events';

export const columns = {
  address: 'address',
  event_id: 'event_id',
  type: 'type',
  timestamp: 'timestamp',
  data: 'data'
};

export const event_type = {
  address_created: 'address_created',
  address_verified: 'address_verified'
};

export const address_status = {
  unknown: 'unknown',
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};
