/** @noSelfInFile */
import type { BaseSchema, BaseSchemaAsync, PipeAsync } from '../../types';
import { type StringSchema, type StringSchemaAsync } from '../string/index';
import type { RecordInput, RecordOutput } from './types';
/**
 * Record key type.
 */
export type RecordKeyAsync = StringSchema<string | number | symbol> | StringSchemaAsync<string | number | symbol>;
/**
 * Record schema async type.
 */
export type RecordSchemaAsync<TRecordValue extends BaseSchema | BaseSchemaAsync, TRecordKey extends RecordKeyAsync = StringSchema, TOutput = RecordOutput<TRecordKey, TRecordValue>> = BaseSchemaAsync<RecordInput<TRecordKey, TRecordValue>, TOutput> & {
    schema: 'record';
    record: {
        key: TRecordKey;
        value: TRecordValue;
    };
};
/**
 * Creates an async record schema.
 *
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async record schema.
 */
export declare function recordAsync<TRecordValue extends BaseSchema | BaseSchemaAsync>(value: TRecordValue, pipe?: PipeAsync<RecordOutput<StringSchema, TRecordValue>>): RecordSchemaAsync<TRecordValue>;
/**
 * Creates an async record schema.
 *
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async record schema.
 */
export declare function recordAsync<TRecordValue extends BaseSchema | BaseSchemaAsync>(value: TRecordValue, error?: string, pipe?: PipeAsync<RecordOutput<StringSchema, TRecordValue>>): RecordSchemaAsync<TRecordValue>;
/**
 * Creates an async record schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async record schema.
 */
export declare function recordAsync<TRecordKey extends RecordKeyAsync, TRecordValue extends BaseSchema | BaseSchemaAsync>(key: TRecordKey, value: TRecordValue, pipe?: PipeAsync<RecordOutput<TRecordKey, TRecordValue>>): RecordSchemaAsync<TRecordValue, TRecordKey>;
/**
 * Creates an async record schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async record schema.
 */
export declare function recordAsync<TRecordKey extends RecordKeyAsync, TRecordValue extends BaseSchema | BaseSchemaAsync>(key: TRecordKey, value: TRecordValue, error?: string, pipe?: PipeAsync<RecordOutput<TRecordKey, TRecordValue>>): RecordSchemaAsync<TRecordValue, TRecordKey>;
