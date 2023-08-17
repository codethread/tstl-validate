local ____lualib = require("lualib_bundle")
local __TS__ObjectAssign = ____lualib.__TS__ObjectAssign
local __TS__ObjectEntries = ____lualib.__TS__ObjectEntries
local __TS__ArrayReduce = ____lualib.__TS__ArrayReduce
local ____exports = {}
local ____index = require("schemas.index")
local nonOptionalAsync = ____index.nonOptionalAsync
local objectAsync = ____index.objectAsync
local ____index = require("utils.index")
local getErrorAndPipe = ____index.getErrorAndPipe
--- Creates an async object schema consisting of all properties of an existing
-- object schema set to none optional.
-- 
-- @param schema The affected schema.
-- @param pipe A validation and transformation pipe.
-- @returns An async object schema.
-- @param schema The affected schema.
-- @param error The error message.
-- @param pipe A validation and transformation pipe.
-- @returns An async object schema.
function ____exports.requiredAsync(schema, arg3, arg4)
    local ____getErrorAndPipe_result_0 = getErrorAndPipe(arg3, arg4)
    local ____error = ____getErrorAndPipe_result_0.error
    local pipe = ____getErrorAndPipe_result_0.pipe
    return objectAsync(
        __TS__ArrayReduce(
            __TS__ObjectEntries(schema.object),
            function(____, object, ____bindingPattern0)
                local schema
                local key
                key = ____bindingPattern0[1]
                schema = ____bindingPattern0[2]
                return __TS__ObjectAssign(
                    {},
                    object,
                    {[key] = nonOptionalAsync(schema)}
                )
            end,
            {}
        ),
        ____error,
        pipe
    )
end
return ____exports