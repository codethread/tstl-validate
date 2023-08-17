/** @noSelfInFile */
import type { BaseSchema, Pipe } from '../../types';
import { type StringSchema } from '../string/index';
import type { RecordOutput, RecordInput } from './types';
/**
 * Record key type.
 */
export type RecordKey = StringSchema<string | number | symbol>;
/**
 * Record schema type.
 */
export type RecordSchema<TRecordValue extends BaseSchema, TRecordKey extends RecordKey = StringSchema, TOutput = RecordOutput<TRecordKey, TRecordValue>> = BaseSchema<RecordInput<TRecordKey, TRecordValue>, TOutput> & {
    schema: 'record';
    record: {
        key: TRecordKey;
        value: TRecordValue;
    };
};
/**
 * Creates a record schema.
 *
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A record schema.
 */
export declare function record<TRecordValue extends BaseSchema>(value: TRecordValue, pipe?: Pipe<RecordOutput<StringSchema, TRecordValue>>): RecordSchema<TRecordValue>;
/**
 * Creates a record schema.
 *
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A record schema.
 */
export declare function record<TRecordValue extends BaseSchema>(value: TRecordValue, error?: string, pipe?: Pipe<RecordOutput<StringSchema, TRecordValue>>): RecordSchema<TRecordValue>;
/**
 * Creates a record schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A record schema.
 */
export declare function record<TRecordKey extends RecordKey, TRecordValue extends BaseSchema>(key: TRecordKey, value: TRecordValue, pipe?: Pipe<RecordOutput<TRecordKey, TRecordValue>>): RecordSchema<TRecordValue, TRecordKey>;
/**
 * Creates a record schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A record schema.
 */
export declare function record<TRecordKey extends RecordKey, TRecordValue extends BaseSchema>(key: TRecordKey, value: TRecordValue, error?: string, pipe?: Pipe<RecordOutput<TRecordKey, TRecordValue>>): RecordSchema<TRecordValue, TRecordKey>;
